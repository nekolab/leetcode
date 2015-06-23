typedef struct {
    int *top;
    int *mTop;
    int *container;
    int *minValues;
} MinStack;

void minStackCreate(MinStack *stack, int maxSize) {
    stack->top = stack->container = malloc(sizeof(int) * maxSize);
    stack->mTop = stack->minValues = malloc(sizeof(int) * maxSize);
}

void minStackPush(MinStack *stack, int element) {
    *(stack->top++) = element;
    if (stack->mTop == stack->minValues) {
        *(stack->mTop++) = element;
    } else {
        int last = *(stack->mTop - 1);
        *(stack->mTop++) = last < element ? last : element;
    }
}

void minStackPop(MinStack *stack) {
    --stack->top;
    --stack->mTop;
}

int minStackTop(MinStack *stack) {
    return *(stack->top -1);
}

int minStackGetMin(MinStack *stack) {
    return *(stack->mTop - 1);
}

void minStackDestroy(MinStack *stack) {
    free(stack->container);
    free(stack->minValues);
}