import React, { useRef,useEffect,useImperativeHandle } from 'react';

const TestWrapper = React.forwardRef(Test)

function Test(props, ref){
    useImperativeHandle(ref,()=>{
        return {
            method: ()=>{console.log("method called")}
        }
    })
	return <h1 ref={ref}>Test Component</h1>
}
export default function App1(){
	const testRef = useRef()
   
    //const Aref = React.createRef()
   useEffect(() => {
    // 打印 ref.current，验证它是否指向了 <h1> 元素
    testRef.current.method(); // 应该输出 <h1> DOM 元素
  }, []);
	return (<>
    <TestWrapper ref={testRef}/>
    </>
	)
}
