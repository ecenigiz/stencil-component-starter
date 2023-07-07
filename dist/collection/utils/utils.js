export function format(first, last) {
    return ((first || "") + (last ? ` ${last}` : ""));
}
