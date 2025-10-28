export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    // My implementation
    // if (JSON.stringify(a) === JSON.stringify(b)) {
    //     return true;
    // }
    //
    // compare(a?.left, b?.left);
    // compare(a?.right, b?.right);
    //
    // return false;

    if (a.value !== b.value) {
        return false;
    }

    return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
