typedef struct Element {
    int data;
    struct Element *prev;
    struct Element *next;
} Element;

typedef struct {
    Element *min;
    Element *top;
    Element *container;
} MinStack;

void minStackCreate(MinStack *stack, int maxSize) {
    stack->min = NULL;
    stack->top = stack->container
               = malloc(sizeof(Element) * maxSize);
}

void minStackPush(MinStack *stack, int element) {
    Element *e = (stack->top)++;
    e->data = element;
    if (stack->min == NULL) {
        stack->min = e;
        e->prev = e->next = NULL;
    } else {
        Element *c = stack->min;
        while(c) {
            if (c->data > element) {
                if (c->prev) {
                    c->prev->next = e;
                    e->prev = c->prev;
                    e->next = c;
                    c->prev = e;
                } else {
                    stack->min->prev = e;
                    e->next = stack->min;
                    stack->min = e;
                    e->prev = NULL;
                }
                break;
            }

            if (c->next == NULL) {
                c->next = e;
                e->prev = c;
                e->next = NULL;
                break;
            }

            c = c->next;
        }
    }
}

void minStackPop(MinStack *stack) {
    Element *e = --(stack->top);
    if (e->prev) {
        e->prev->next = e->next;
    } else {
        stack->min = e->next;
    }
    if (e->next) { e->next->prev = e->prev; }
}

int minStackTop(MinStack *stack) {
    return (stack->top - 1)->data;
}

int minStackGetMin(MinStack *stack) {
    return stack->min->data;
}

void minStackDestroy(MinStack *stack) {
    free(stack->container);
}