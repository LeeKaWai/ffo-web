// app/components/QiuTianContent.tsx
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  img: string | string[];
  level: string;
  place: string;
  conditional: string;
}

interface QiuTianContentProps {
  profession: string;
  levels: number[];
}

const levelToTypeMap: { [key: number]: string } = {
  10: '普',
  30: '真',
  45: '秘',
};


const QiuTianContent: React.FC<QiuTianContentProps> = ({ profession, levels }) => {
  const [data, setData] = useState<{ [key: number]: Skill[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      const levelData = await Promise.all(
        levels.map(async (level) => {
          const response = await fetch(`/api/skills?profession=${profession}&type=qiutian&level=${level}`);
          const result = await response.json();
          return result;
        })
      );

      const newData: { [key: number]: Skill[] } = {};
      levels.forEach((level, index) => {
        newData[level] = levelData[index];
      });
      setData(newData);
    };

    fetchData();
  }, [profession, levels]);

  return (
    <div>
      {levels.map((level) => (
        <div key={level}>
          <div className="page-title">{`秋之枫红-${levelToTypeMap[level] || '未知'}(${level}级)`}</div>
          <div className="equipment-cont box-equipment" style={{ width: '100%' }}>
            <div className="head">
              <span className="rec-text" style={{ width: '10%' }}>图片</span>
              <span className="onstage-text" style={{ width: '10%' }}>名称</span>
              <span className="win-text" style={{ width: '10%' }}>等级</span>
              <span className="win-text" style={{ width: '10%' }}>部位</span>
              <span className="win-text" style={{ width: '60%' }}>兑换条件</span>
            </div>
           <div className="list">
              {data[level]?.map((skill, index) => (
                <div className="list-item" key={index}>
                  <div className="list-item-col" style={{ width: '10%' }}>
                    {Array.isArray(skill.img)
                      ? skill.img.map((imgUrl, index) => (
                        <Image
                          key={index}
                          src={imgUrl}
                          alt={skill.name}
                          width="41"
                          height="41"
                          style={{ marginRight: '5px' }}
                        />
                      ))
                      : skill.img && (
                        <Image
                          src={skill.img}
                          alt={skill.name}
                          width="41"
                          height="41"
                        />
                      )
                    }
                  </div>
                  <span className="onstage-text" style={{ width: '10%' }}>{skill.name}</span>
                  <span className="onstage-text" style={{ width: '10%' }}>{skill.level}</span>
                  <span className="onstage-text" style={{ width: '10%' }}>{skill.place}</span>
                  <span className="win-text" style={{ width: '60%' }}>{skill.conditional}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QiuTianContent;
