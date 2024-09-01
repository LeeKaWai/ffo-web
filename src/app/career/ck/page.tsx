'use client';
import Image from 'next/image';
import { useState } from 'react';

import OverviewContent from './components/OverviewContent';
import QiuTianContent from './components/QiutianContent';


export default function CK() {

    const skillData = [
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_091.jpg",
            name: "连环枪法",
            level: "10",
            target: "目标",
            description: "低级枪系技能，对敌人造成130%的伤害，每升一级，伤害提升5%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_092.jpg",
            name: "穿刺之枪",
            level: "10",
            target: "范围",
            description: "对50*150的长方形范围内的敌人造成95%的伤害；每升一级造成伤害提升5%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_093.jpg",
            name: "破防之枪",
            level: "15",
            target: "目标",
            description: "降低敌人20%的防御15秒，每升一级多降低敌人3%的防御。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_094.jpg",
            name: "冲锋",
            level: "15",
            target: "目标",
            description: "5秒内移动速度提升50%；每升一级造成持续时间延长1秒。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_095.jpg",
            name: "破甲",
            level: "20",
            target: "被动",
            description: "使敌人一段时间内受到的伤害增加。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_096.jpg",
            name: "飞翔之枪",
            level: "20",
            target: "目标",
            description: "远程枪术，对敌人造成105%伤害，每升一级造成伤害提升5%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_097.jpg",
            name: "破法之枪",
            level: "25",
            target: "目标",
            description: "100%伤害，同时敌人法力值受到攻击力60%伤害，每次升级伤害法力效果增加10%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_098.jpg",
            name: "全力投掷",
            level: "25",
            target: "被动",
            description: "5秒内降低敌人速度50%，成功率30%；每升一级多降低敌人移动速度10%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_099.jpg",
            name: "震地之枪",
            level: "30",
            target: "范围",
            description: "对120度角半径150扇形范围内的敌人造成135%伤害；每升一级伤害提升5%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_100.jpg",
            name: "破魔",
            level: "30",
            target: "被动",
            description: "破法之枪造成的法力伤害效果增加10% ，每次升级再次增加10%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_101.jpg",
            name: "裂空之枪",
            level: "36",
            target: "目标",
            description: "以5%武器耐久度换取对敌人180%伤害；每升一级武器损耗提升1%，伤害提升10%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_102.jpg",
            name: "震空枪气",
            level: "36",
            target: "被动",
            description: "20%的几率震退敌人；每升一级几率增加5%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_103.jpg",
            name: "流虹之枪",
            level: "43",
            target: "范围",
            description: "对80*250的长方形范围内的敌人造成145%的伤害，每升一级造成伤害提升5%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_104.jpg",
            name: "维护",
            level: "43",
            target: "被动",
            description: "降低裂空之枪使用时消耗的武器耐久度，升级使此效果增强。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_105.jpg",
            name: "心眼之枪",
            level: "51",
            target: "目标",
            description: "100%命中，造成敌人165%的伤害，每升一级伤害提升4%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_106.jpg",
            name: "野战八荒",
            level: "51",
            target: "范围",
            description: "对以自己为中心150圆范围内的敌人造成155%的伤害；每升一级造成伤害提升5%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_107.jpg",
            name: "石化之枪",
            level: "60",
            target: "目标",
            description: "使敌人石化5秒，每次升级效果延长1秒。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_108.jpg",
            name: "战神之枪",
            level: "60",
            target: "目标",
            description: "远程枪术，100%命中，对敌人造成160%伤害；每升一级造成伤害提升10%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_109.jpg",
            name: "精准之印",
            level: "64",
            target: "面积",
            description: "提升自己和半径300像素圆形范围内队友的物理命中60，持续30分钟，每升一级提高60点命中。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_110.jpg",
            name: "命令之印",
            level: "68",
            target: "面积",
            description: "提升自己和半径300像素圆形范围内队友的生命上限5%，持续3分钟。每升一级上限增加1%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_111.jpg",
            name: "勇者之吼",
            level: "70",
            target: "面积",
            description: "增加自己和半径为500像素圆形范围内队友的物理和魔法爆击等级20，每升一级提高10点。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_112.jpg",
            name: "怒杀斩",
            level: "72",
            target: "目标",
            description: "造成200%伤害，如果目标处于石化状态则额外造成500点伤害且本技能爆击率提升25%。10%概率无视伤害吸收效果。"
        },
        {
            img: null,
            name: "辅助技能",
            level: "",
            target: "",
            description: ""
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_113.jpg",
            name: "枪法修炼",
            level: "15",
            target: "被动",
            description: "提高枪系攻击技能的攻击力2%，每升一级攻击力加2%。"
        },
        {
            img: "http://ossweb-img.qq.com/images/ffo/a20090501index/newerData/newer_114.jpg",
            name: "疾风步",
            level: "30",
            target: "被动",
            description: "移动速度提升5%，每升一级移动速度提升1%。"
        }
    ];



    const skillData2 = [
        {
            profession: "破魂·朱雀（战士）",
            items: [
                {
                    img: "http://ossweb-img.qq.com/images/ffo/a20090409mwzj/1_1.jpg",
                    name: "破魂翼·朱雀",
                    position: "手套",
                },
                {
                    img: "http://ossweb-img.qq.com/images/ffo/a20090409mwzj/1_2.jpg",
                    name: "破魂顏·朱雀",
                    position: "面饰",
                },
                {
                    img: "http://ossweb-img.qq.com/images/ffo/a20090409mwzj/1_3.jpg",
                    name: "破魂环·朱雀",
                    position: "戒指",
                },
                {
                    img: "http://ossweb-img.qq.com/images/ffo/a20090409mwzj/1_4.jpg",
                    name: "破魂坠·朱雀",
                    position: "项链",
                },
            ],
            attributes: "最大攻击:24\n最大生命:628",
            skill: "战争之灵·肆"
        }
    ];
    const [selected, setSelected] = useState("总览");

    const menuItems = [
        "总览",
        "秋天套装",
        "仙器套装",
        "百战 & 龙套",
        "62 & 66套装",
        "子龙 & 死人寒",
        "73套装",
        "81套装",
        "82套装",
        "87套装",
        "88套装"
    ];

    const handleSelection = (item: any) => {
        setSelected(item);
    };

    const renderContent = () => {
        switch (selected) {
            case "总览":
                return <OverviewContent skillData={skillData} />
            case "秋天套装":
                return  <QiuTianContent profession="ck" levels={[10,30,45]}/>
            case "仙器套装":
                return <div>仙器套装的详细信息</div>;
            // Add more cases for other menu items, each returning its own unique content
            default:
                return <div>请选择一个选项</div>;
        }
    };



    return (
        <>
            <div className="hero-details hero-details-5v5">
                <div className='hero-show'>
                    <div className="hero-img">
                        <div
                            className="hero-skin-swiper swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                            <div className="swiper-wrapper" id="swiper-wrapper-4538e32d606fcb21" aria-live="polite">
                                <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 12"
                                    style={{ width: 314 }}>
                                    <Image
                                        src="https://ossweb-img.qq.com/images/ffo/a20080402papaer/paper8_b.jpg"
                                        width={322}
                                        height={585}
                                        alt="狂战士" />
                                </div>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span
                                className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                    <div className="hero-intro">
                        <p className="hero-name">铁血之战士</p>
                        <div className="hero-type">刺客</div>
                        <div className="hero-type">物理</div>
                        <ul className='info-list'>
                            <li className="item"><span>技能描述</span></li>
                        </ul>
                    </div>
                </div>
                <div className="details-container" style={{ backgroundColor: '#041822' }}>
                    <div className="page-title">
                        英雄详情
                    </div>
                    <div className="filter-box">
                        <div className="component-switch-filter">
                            <a
                                href="#"
                                className={selected === "总览" ? "active" : ""}
                                onClick={() => handleSelection("总览")}
                            >
                                总览
                            </a>
                        </div>
                        <div className="component-switch-filter">
                            {menuItems.slice(1).map((item) => (
                                <a
                                    href="#"
                                    key={item}
                                    className={selected === item ? "active" : ""}
                                    onClick={() => handleSelection(item)}
                                >
                                    <span>{item}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="details-content">
                        <div className="data-screening">
                            <div className="left" style={{ width: '100%' }}>
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
