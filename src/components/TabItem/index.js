// Write your code here
import './index.css'

const TabItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem
  return (
    <li>
      <div className="eachTabItems">
        <div className="each-app-card">
          <li>
            <img className="image" src={imageUrl} alt={appName} />
            <p>{appName}</p>
          </li>
        </div>
      </div>
    </li>
  )
}
export default TabItem
