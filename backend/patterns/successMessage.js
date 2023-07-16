module.export = (errorName, errorText) =>
{
    return {
        error: errorName,
        desc: errorText
    }
}
