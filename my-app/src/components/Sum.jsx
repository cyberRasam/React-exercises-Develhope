export const Sum = (props) => {
    
    return (
        <div>
            {props.numbers.reduce((a,b) => {
                return a+b;
            })}
        </div>
    )
}