import Pl from './Pl'

export const data = [
    { id: "1", item: "Milk", quantity: 12, available: false },
    { id: "2", item: "Chicken", quantity: 10, available: true },
    { id: "3", item: "Gauva", quantity: 4, available: true },
    { id: "4", item: "Honey", quantity: 0, available: false },
    { id: "5", item: "JackFruit", quantity: 20, available: true },
    { id: "6", item: "Papaya", quantity: 30, available: false }
]
export default function P() {
    
    return (
        <div className='container'>
            <Pl/>
        </div>
    )
}
