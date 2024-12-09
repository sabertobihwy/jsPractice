import React from 'react'
import pathToRegexp from 'path-to-regexp'

export default function TestPathToRegex() {
    const path = '/api/:id/:page(\\d+)'
    const result = convertPath(path,'/api/1/444')
    console.log(result)
  return (
    <div>
      
    </div>
  )
}

/**
 * param: matchPath, path, options
 * return: !match: undefined; match: obj{ attribute: value}
 */
function convertPath(matchPath, path, options){
    const keys = []
    const result = pathToRegexp(matchPath,keys,options)
    const valueArr = result.exec(path)
    if(!valueArr){
        return undefined
    }
    const valuesArr = Array.from(valueArr).slice(1)
    return keyValueGenerate(valuesArr,keys)
}

function keyValueGenerate(values, keys){
    const obj = {}
    for(let i = 0; i< keys.length; i++){
        obj[keys[i]['name']] = values[i]
    }
    return obj
}
