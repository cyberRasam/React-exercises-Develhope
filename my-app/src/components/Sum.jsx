export const Sum = ({numbers=[1,2,3,4]}) => {
    
    return (
        <div>
            {numbers.reduce((a,b) => {
                return a+b;
            })}
        </div>
    )
}