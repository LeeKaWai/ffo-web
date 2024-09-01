'use client';
import Image from 'next/image';
import React from 'react';

// 定义 props 的类型
interface Skill {
  img: string | null;
  name: string;
  level: string;
  target: string;
  description: string;
}

interface OverviewContentProps {
  skillData: Skill[];
}

const OverviewContent: React.FC<OverviewContentProps> = ({ skillData }) => (
  <div>
    <div className="rune-recommend">
      <div className="title">职业背景</div>
      <div className="rune-item">
        <p style={{ color: '#5e625a', fontSize: '0.14rem' }}>
          战士是游戏中物理攻击最高的职业，他们自身在无数修罗场中积累形成了野兽般的直觉以及疯狂的战意...
        </p>
      </div>
    </div>
    <div className="equipment-recommend">
      <div className="equipment-cont box-equipment" style={{ width: '100%' }}>
        <div className="head">
          <span className="rec-text" style={{ width: '10%' }}>图片</span>
          <span className="onstage-text" style={{ width: '10%' }}>名称</span>
          <span className="win-text" style={{ width: '10%' }}>等级</span>
          <span className="win-text" style={{ width: '10%' }}>作用</span>
          <span className="win-text" style={{ width: '60%' }}>技能说明</span>
        </div>
        <div className="list">
          {skillData.map((skill, index) => (
            <div className="list-item" key={index}>
              <div className="list-item-col" style={{ width: '10%' }}>
                <Image src={skill.img ?? ''} alt={skill.name} width="41" height="41" />
              </div>
              <span className="onstage-text" style={{ width: '10%' }}>{skill.name}</span>
              <span className="onstage-text" style={{ width: '10%' }}>{skill.level}</span>
              <span className="onstage-text" style={{ width: '10%' }}>{skill.target}</span>
              <span className="win-text" style={{ width: '60%' }}>{skill.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OverviewContent;
