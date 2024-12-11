import React from 'react'
import pathToRegexp from 'path-to-regexp'

export default function TestPathToRegex() {
    const path = '/api/:id/:age'
    const result = convertPath(path,'/api/1/30',{end: false })
    console.log(result)
  return (
    <div>
      
    </div>
  )
}

/**
 * param: matchPath, path, options
 * options 只要 strict, sensitive, exact
 * return: !match: undefined; match: obj{ attribute: value}
 */
function convertPath(matchPath, path){
    const keys = []
    const result = pathToRegexp(matchPath,keys,getOptions())
   
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

function getOptions(options){
    const defaultOpts = {
        exact: true,
        strict: false,
        sensitive: false
    }
    const opts = {...defaultOpts, ...options}
    return {
        exact: opts.exact,
        strict: opts.strict,
        sensitive: opts.sensitive
    }
}

