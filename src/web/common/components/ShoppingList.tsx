import React from 'react'

type MyProps = { 
	value: string
}

class Square extends React.Component<MyProps>{

	render(){
		return (
			<button>
				{this.props.value}
			</button>
		)
	}
}

export default Square

// 用法示例: <ShoppingList name="Mark" /props>