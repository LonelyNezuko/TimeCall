const methods = {}
function methodAdd(name, type, func)
{
    methods[name] = {
        type,
        func
    }
}

module.export = { methods, methodAdd }
