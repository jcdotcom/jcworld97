//import * as path from 'path';

const importAllImages = async () => {
    //const imageModules = import.meta.glob('../assets/*.{jpg, gif, webp}', { eager: true, as: 'url' });
    const imageModules = Object.values(import.meta.glob('@assets/asso/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
    for(const path in imageModules){
        console.log(path);
    }
    //return imageModules;

    //return Object.entries(imageModules).reduce((acc, [path, module]) => {
        //const filename = path.basename(path);
        //acc[filename] = module.default;
        //return acc;
    //}, {});
};

//     for(const path in imageModules){
//         imageModules[path]().then((mod) => {
//             console.log(path, mod);
//         })
//     }
// };

export default importAllImages;