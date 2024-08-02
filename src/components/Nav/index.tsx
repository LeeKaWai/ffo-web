

export default function Nav(){
    return (
        <ul className="left-menu-nav">
        <li className="left-menu-item active">
          <i title="t" className="item-icon">
            <svg width="20" height="20" viewBox="0 0 79 79"></svg>
          </i>
          <span className="item-name">
            精品攻略
          </span>
        </li>
        <li className="left-menu-item active">
          <i title="e" className="item-icon">
            <svg width="21px" height="17px"></svg></i>
          <span className="item-name">峡谷排位</span>
        </li>
        <li className="left-menu-item active">
          <i title="e" className="item-icon">
            <svg width="20px" height="18px"></svg>
          </i>
          <span className="item-name">
            大乱斗
          </span>
        </li>
      </ul>
    )
}