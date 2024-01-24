## ChemDoodle for Next.js

Due to Next.js's runtime is not fully client runtime(even though you declared 'use client'). The parameter(like module.exprots) of node runtime will be added through Next.js's pack, and the ChemDoodle uses UMD for module build, which means it judge code runtime by parameters like exports, module.exports, which will make a wrong judge result and cause error in web

I have fixed this issue temporarily by deleting the UMD judge code in ChemDoodle(which means it only works fine at web)

### Useage

see code in example