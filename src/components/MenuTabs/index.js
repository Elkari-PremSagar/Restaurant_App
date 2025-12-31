import './index.css'

const MenuTabs = ({menuList, activeCategoryId, setActiveCategoryId}) => (
  <div className="tabs-container">
    {menuList.map(each => (
      <button
        key={each.menu_category_id}
        type="button"
        className={
          activeCategoryId === each.menu_category_id ? 'tab active' : 'tab'
        }
        onClick={() => setActiveCategoryId(each.menu_category_id)}
      >
        {each.menu_category}
      </button>
    ))}
  </div>
)

export default MenuTabs
