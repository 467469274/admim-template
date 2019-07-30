const fs = require('fs')
export function writeFile (tempaltes,path,callback) {
    const template = `
        <template>
            <div>
                ${tempaltes.template}
            </div>
        </template>
        <script>
            export default {
                methods:{${functionString(tempaltes.methods)}}
            }
            ${tempaltes.script?tempaltes.script:''}
        </script>
        <style>
            ${tempaltes.style?tempaltes.style:''}
        </style>`
    let endPath = path?path:`./outFile`
    endPath = `${endPath}/${tempaltes.name}.vue`
    fs.writeFile(endPath,template,callback)
}
function functionString(obj) {
    let string = ''
    for(let key in obj){
        string+=`${key}:${obj[key]},`
    }
    console.log(string)
    return string
}
