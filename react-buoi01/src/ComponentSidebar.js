function ComponentSidebar(props) {
    return (
        <div style={{width:props.width, height:props.height, background:props.color}}>{props.color}</div>
    )
}

export default ComponentSidebar;