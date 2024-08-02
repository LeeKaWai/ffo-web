import Image from 'next/image';

export default function Equipment() {
    return (
        <div className="app-main-container infomation-overview">
            <div className="filter-box">
                <div className="component-search-box">
                    <input type="text" placeholder="搜索" />
                    <a title="搜索" className="btn-search icon-search"></a>
                </div>
                <div className="component-switch-filter">
                    <a className="active">全部</a>
                    <a className="">战士</a>
                    <a className="">剑客</a>
                    <a className="">刺客</a>
                    <a className="">药师</a>
                    <a className="">术士</a>
                </div>
                <div className="component-switch-filter">
                    <a className="active">全部</a>
                    <a className="">武器</a>
                    <a className="">头盔</a>
                    <a className="">衣服</a>
                    <a className="">手套</a>
                    <a className="">鞋子</a>
                    <a className="">面具</a>
                    <a className="">项链</a>
                    <a className="">背包</a>
                    <a className="">戒指</a>
                </div>

            </div>
            <ul className="hero-list">
                <li className="list-item">
                    <div className="hero-item">
                        <div className="hero-pic">
                            <div className="hero-position">
                                <span><i className="icon-pos-mid"></i></span>
                            </div>
                            <Image
                                src="https://game.gtimg.cn/images/lol/act/img/skinloading/0b95894e-0df2-470e-b282-6c5f5cf41955.jpg"
                                alt="Skin loading"
                                width={500} // specify the width
                                height={500} // specify the height
                            />
                        </div>
                        <p className="hero-name">黑暗之女</p>
                    </div>
                    <a href="#/hero-detail?heroid=1" className=""></a>
                </li>
            </ul>
        </div>
    )
}