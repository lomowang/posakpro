import Image from "next/image";
import React from "react";

const fielddata = [
  {
    name: "田野筆記2019",
    secname: "Field Notes 2019",
    title: "外婆—Sobay Mona",
    text: "我們要走，我們又要去，我們去了又要再去，我們要去狩獵，我跟著我父親的背後，我們進入了山頂上。我帶著長槍，我帶了火藥，我要背著走，我看到猴 子，我就這樣子射，是這樣射，這邊喔，射出去掉下來，射出去掉下來，我一 次射出去掉了三隻下來，這是我們的獵物，我們中午要吃的，我們要配地瓜湯 來吃，我的孩子都很高興……… ",
    enname: "Grandmother – Sobay Mona",
    entext:
      "We’re going, we’re going again, we’re going and we’re going again,we’re going on a hunt.I followed my father; we went up into the hills.I’m carrying a spear, I’m carrying gunpowder, I’m carrying it on my back.I saw the monkeys, and I shot them like this. I shot them like this.Here! Oh, one shot and it fell. One shot and it fell.I have shot three of them at once. This is our prey.We are having it for lunch. We are having it with sweet potato soup. My kids are very happy……",
    image: "/SobayMona.jpg",
    audio: "/mp3/SobayMonaSong1.m4a",
    sectext: "外婆唱狩獵的歌 -Grandma sang a hunting song.",
  },
  {
    name: "田野筆記2022",
    secname: "Field Notes 2022",
    title: "媽媽—Heydi Mijung",
    text: "你真的活該 我已經逮到你了。你把我的山蘇都偷吃完了 現在該我要吃你，我的孩子們都會高興 全家人也會很開心，終於有肉可以吃 這樣才是真的我是一個女人 我是真正的女人，我揹了獵物回來 聽我喊吧，聽我呼喊吧 我在呼叫一家人，孩子啊 我的孩子們都過來看吧，都過來吃 這是媽媽帶回來的獵物，我就像男人一樣強壯勇敢 我們一起來歡樂吧",
    enname: "Mother-Heydi Mijung",
    entext:
      "You (the goat) deserve it, I’ve got you.You’ve stolen all my ferns and now it’s my turn to eat you.My children will be happy, my whole family will be happy.A piece of goat meat at last. That’s what it’s all about.I’m a woman. I’m a real woman.I’ve come back with the prey on my back. Hear my call.Hear me as I call out. I’m calling the family.Children, my children, come and see.Come and eat. This is the prey that mommy brought back.I’m as strong and brave as a man. Let’s enjoy it together.",
    image: "/HeydiMijung.png",
    audio: "/mp3/SobayMonaSong2.m4a",
    sectext: "揹動物之歌–The Song of Carrying Animals.",
  },
];

const FieldDataItem = ({ item }) => (
  <article>
    <div className="xl:flex ">
      <div className="py-4 xl:m-2 ">
        <h2 className="font-bold bg-gray-200">{item.name}</h2>
        <p className="xl:text-sm bg-gray-200">{item.secname}</p>
        <p className="xl:mt-4">{item.title}</p>
        <p className="py-2 xl:text-sm xl:leading-8 ">{item.text}</p>
      </div>
      <div className="xl:pt-20 xl:m-2 flex flex-col  ">
        <h2 className="font-bold">{item.enname}</h2>
        <h3 className="py-2 xl:text-sm xl:leading-7  ">{item.entext}</h3>
      </div>
      <div className="xl:m-2 xl:py-24">
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="xl:m-2  xl:py-24 lg:mt-2">
        <audio controls className="m-auto">
          <source src={item.audio} type="audio/mpeg" />
        </audio>
        <p className="text-xs xl:mt-4 p-2 flex flex-col items-center">
          {item.sectext}
        </p>
      </div>
    </div>
  </article>
);

const Fielddata = () => {
  return (
    <section>
      {fielddata.map((item, index) => (
        <FieldDataItem key={item.id || index} item={item} />
      ))}
    </section>
  );
};

export default Fielddata;
