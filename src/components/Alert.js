import React from "react"

export default function Alert(props) {
	const capitalize = (word) => {
		const lower = word.toLowerCase()
		return lower.charAt(0).toUpperCase() + lower.slice(1)
	}
	return (
		<div className='container container my-3'>
			<div style={{height: "50px"}} className=''>
				{props.alert && (
					<div
						className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`}
						role='alert'
					>
						<strong>
							{/* {capitalize(props.alert.type)}: */}
							{props.alert.message}
						</strong>
					</div>
				)}
			</div>
		</div>
	)
}
