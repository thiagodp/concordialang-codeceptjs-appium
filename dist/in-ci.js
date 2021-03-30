function is(it) {
    return !!it && it !== '0' && it !== 'false';
}
function isInCI() {
    return process && is(process.env['CI']);
}
// Returns with an error when *not* in CI mode
if (process && !isInCI()) {
    process.exit(1);
}
