// Write your code here
import './index.css'

const AppItem = props => {
  const {eachTabItem, clickTabItem, isActiveTab} = props
  const {displayText, tabId} = eachTabItem
  const OnClickActiveTabId = () => {
    clickTabItem(tabId)
  }

  const activeButton = isActiveTab ? 'changeTabColor' : ''

  return (
    <li>
      <button
        className={`eachButton ${activeButton}`}
        type="button"
        onClick={OnClickActiveTabId}
      >
        {displayText}
      </button>
      {isActiveTab ? (
        <hr className={`line-blue ${activeButton}`} />
      ) : (
        <hr className="line" />
      )}
    </li>
  )
}
export default AppItem
