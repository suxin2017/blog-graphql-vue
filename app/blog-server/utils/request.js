import  { readdirSync, statSync} from 'fs';
import path from 'path';
import { cwd } from 'process';
/**
 * @typedef {Object} GraphqlModel
 * @property {any} typeDef
 * @property {any} resolver
 */



function requireDeepModule(basePath,modules){
    return modules.map(module=>{
        const modulePath = path.join(basePath,module);
        if(statSync(modulePath).isDirectory()){
            return requireDeepModule(modulePath,readdirSync(modulePath))
        }else{
            const extname = path.extname(module)
            if(extname === '.js'){
                return require(path.join(basePath,module))
            }
        }
    })
}

/**
 * 请求一个目录下的js
 * @param {string} graphqlPath graphql路径
 * @returns {GraphqlModel[]}
 */
export function requreDir(graphqlPath){
    const baseDir = cwd();
    const modulePath = path.join(baseDir,graphqlPath);
    const modules = readdirSync(modulePath);
    const requires = requireDeepModule(modulePath,modules)
    return requires.flat()
}

