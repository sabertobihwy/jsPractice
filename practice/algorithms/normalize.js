/**
 * Parameter Normalization
 * @param {*} date 
 * @param {*} formatter 
 * @param {*} isPad 
 */
function format(date, formatter, isPad = false){
    const func = _normalize(formatter)
    const dataInfo = _generateDataInfo(date,isPad)
    console.log(func(dataInfo)) 
}
// const a = new Date()
// a.getMilliseconds

function _generateDataInfo(date, isPad){no.format
    console.log(date instanceof Date)
    const dataInfo = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day : date.getDay(),
        hour: date.getHours(),
        min: date.getMinutes(),
        second: date.getSeconds(),
        miliseconds: date.getMilliseconds()
    }
    if(isPad){
        dataInfo.yyyy = dataInfo.year.toString().padStart(4,'0')
        dataInfo.MM = dataInfo.month.toString().padStart(2,'0')
        dataInfo.dd = dataInfo.day.toString().padStart(2,'0')
        dataInfo.HH = dataInfo.hour.toString().padStart(2,'0')
        dataInfo.mm = dataInfo.min.toString().padStart(2,'0')
        dataInfo.ss = dataInfo.second.toString().padStart(2,'0')
        dataInfo.ms = dataInfo.miliseconds.toString().padStart(3,'0')
    }else{
        dataInfo.yyyy = dataInfo.year.toString()
        dataInfo.MM = dataInfo.month.toString()
        dataInfo.dd = dataInfo.day.toString()
        dataInfo.HH = dataInfo.hour.toString()
        dataInfo.mm = dataInfo.min.toString()
        dataInfo.ss = dataInfo.second.toString()
        dataInfo.ms = dataInfo.miliseconds.toString()
    }
    return dataInfo
}

function _normalize(formatter){
    if(typeof formatter === 'function'){
        return formatter
    }
    if(typeof formatter !== 'string'){
        throw new TypeError("formatter type error")
    }
    let tempStr = ''
        if(formatter === 'date'){
            tempStr = 'yyyy-MM-dd'
        }else if(formatter === 'datetime'){
            tempStr = 'yyyy-MM-dd HH:mm:ss'
        }else{
            tempStr = formatter
        }
    return (dateInfo)=>{
        const {yyyy,MM,dd,HH,mm,ss,ms} = dateInfo
        return tempStr.replace(/yyyy/g, yyyy)
        .replace(/MM/g, MM)
        .replace(/dd/g, dd)
        .replace(/HH/g, HH)
        .replace(/mm/g, mm)
        .replace(/ss/g, ss)
        .replace(/ms/g, ms)

    }
}

//2024-3-21
format(new Date('2014-05-01'), 'date')

// 2024-3-21 14:7:41
format(new Date('2014-05-01'), 'datetime')

// 2024-03-21
format(new Date('2014-05-01'), 'date', true)

// 2024年03月21日 14:06:41
format(new Date('2014-05-01'), 'datetime', true)

format(new Date('2014-05-01'), 'yyyy年MM月dd日 HH:mm:ss.ms', true)

// 2024年03月21日 14:6:41.336
// format(new Date('2014-05-01'), (dateInfo)=>{ console.log(dateInfo+"想要的格式")})

