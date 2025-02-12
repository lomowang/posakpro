import Image from "next/image";
import Link from "next/link";
import React from "react";

const Text = () => {
  return (
    <section className="flex flex-col space-y-16 p-4 m-8 lg:m-40">
      {/* Astronesian Atlas */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 flex flex-col items-center lg:items-start my-auto">
          <ul className="mt-4 space-y-2 ">
            <li>
              <p className="text-[14px]">
                Nusantara Archive Project: Astronesian Atlas | KEYWORD
                DICTIONARY OF ASIAN CONTEMPORARY ART | 2022
              </p>
            </li>
            <li>
              <Link
                href="https://www.keywordsart.com/Astronesian-Atlas.php"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                more
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            We – In between kita and kami #Kami #Kita
          </h2>
          <p className="mt-4 text-[16px] text-justify leading-6">
            The Keyword Dictionary of Asian Contemporary Art is a transnational
            project launched in 2022, by TSAI Ping-Ju and LI Kuei-Pi in Taiwan,
            during the COVID-19 pandemic, which aims to re-organize and
            articulate the methodology of Asian contemporary art through three
            sets of keywords and workshops. This brings to mind the project
            launched by the No Man’s Land Residency and the Nusantara Archive
            Project, supported by the Digital Art Foundation (Taiwan), in which
            a bridge of collaboration was built for Malaysian photographer
            Jeffrey LIM and Taiwanese Amis (Pangcah) filmmaker Posak Jodian. In
            the project, the two artists helped each other to navigate the
            Pangcah community and the Malay indigenous culture of the Orang Asli
            on the Peninsula, and created video documentation of their work
            along the way. This time, for the Keyword Dictionary of Asian
            Contemporary Art, I have invited Angga Cipta (Acip) from Indonesia
            to pair with Posak, considering that both of them are from the
            Austronesian language family, and may therefore unfold a different
            scale of cultural exchange through their collaboration of keyword
            writing.
          </p>
        </div>
      </div>

      {/* Lakec and Lakec: A Very Simple River */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 flex flex-col items-center lg:items-start my-auto">
          <ul className="mt-4 space-y-2 ">
            <Image
              src="/pro/Cilifenam.jpeg"
              width={380}
              height={120}
              alt="Cilifenam"
              layout="intrinsic" // 使用 intrinsic layout 確保圖片不變形
              objectFit="cover"
            />

            <li>
              <p className="text-[14px]">
                No Man’s Land | ISSUE 50 : The Portal & The Rearview Mirror |
                September 2021
              </p>
            </li>
            <li>
              <Link
                href="https://www.heath.tw/nml-article/lakec-and-lakec-a-very-simple-river/"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                more
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            Lakec and Lakec: A Very Simple River
          </h2>
          <p className="mt-4 text-[16px] text-justify leading-6">
            Lakec，渡河。這個系列的開始是始於我對河流的陌生，以及對自己Pangcah文化的不了解。像是一個不太會游泳的人，因為不知道怎麼游過河，所以想盡辦想要探尋在河周邊的人、事、物，他們是用什麼樣子的方法，或是經過什麼樣的路徑渡過這條河的，慢慢在他們的經驗跟故事之中，我也才能漸漸梳理出自己走向河流的方法。
            <br></br>
            自2018年由打開–當代藝術工作站及「群島資料庫」（Nusantara
            Archive）共同策劃的《邊境旅行》（PETAMU
            Project）展覽當中，我與馬來西亞藝術家林猷進（Jeffrey
            Lim）在各自創作的軸線中，共同走上走訪部落的路途。2019年我又與Jeffrey踏上新的旅程，進入到馬來西亞多個原住民聚落，以肖像攝影與紀錄片、聲音採集等不同媒介，一點一點地行走河流和土地，訪談部落耆老與青年的口述故事、神話與歌謠。
            <br></br>
            對我而言，無論是背著攝影機的我，或是扛著自製相機的Jeffrey，使我們共同走在探詢各自創作路途上的契機，並非是要完成一個作品的想望，而是迫切想要走上尋找認同慨念的動力，推引著我們走上這兩次不同的計劃，跨越不同的部落與國家。在〈Lakec〉與〈Lakec:
            A Very Simple
            River〉的創作過程中，雖然都以河流的追尋為起點，但時常到最終，我都無法描繪出一張清晰的河流地圖，而是只能試著把這些在渡河的過程當中所學到的訪談、口述故事、神話或歌謠再次揉捏成一個我能夠表達的路徑，摸索著行走過去。
          </p>
        </div>
      </div>

      {/* ACT 85. 原民場域．當代轉換：藝術的原民性與困惑的多元性 */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 my-auto ml-auto">
          {/* <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            Remapping – PaperExhibition
          </h2> */}
          <ul className="mt-4 space-y-2 ">
            <li>
              <p className="text-[14px]">
                curated by Huang Ching-Ing, ACT 85. Indigenous Fields,
                Contemporary Transformations: Indigeneity in Arts and Confusions
                in Plurality, April 2021
              </p>
            </li>
            <li>
              {/* <Link
                href="https://www.keywordsart.com/Astronesian-Atlas.php"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                more
              </Link> */}
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            {/* ACT 85. 原民場域．當代轉換：藝術的原民性與困惑的多元性 */}
            Remapping – PaperExhibition
          </h2>
          <p className="mt-4 text-[16px] text-justify leading-6">
            這個專題的構想，源自於2020年幾個重要的原民當代藝術展演和論壇。首先是呂瑋倫在桃園市原住民族文化會館策劃的「靜寂的盛典：原住民當代藝術中的性別視鏡」三個系列：「迷園」、「她鄉」與「夢所」，以及後續在花蓮文創園區舉辦的論壇「未盡的群像：原住民社群中的性別重影」；然後是年中在屏東美術館盛大開展，由徐文瑞和伊誕．巴瓦瓦隆（Etan
            Pavavalung）策劃的「未來潮：大山地門當代藝術展」以及後續的相關參訪和書寫；最後是11月底在三間屋實驗聚落舉辦的「原民性、當代藝術與人類世論壇」，由張恩滿、蔣偉光和Nakaw
            Putun擔綱發表。
            <br></br>
            與此同時，瀞瑩和瑋倫也持續參加一些原民當代藝術的採訪書寫和觀察員計畫，我個人也受邀參與2020年Pulima藝術節「mapalaktnbarah路折枝」六個系列策展計畫的顧問工作。這些如藤蔓快速滋長的線索，交纏互生，使我們決定為此刻的原民當代藝術，留下一些宛若經緯線交織的思考絮語。
          </p>
        </div>
      </div>

      {/* Remapping */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 flex flex-col items-center lg:items-start my-auto">
          {/* <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            Remapping
          </h2> */}
          <ul className="mt-4 space-y-2 ">
            <Image
              src="/pro/Remapping.jpeg"
              width={380}
              height={120}
              alt="Remapping"
              layout="intrinsic" // 使用 intrinsic layout 確保圖片不變形
              objectFit="cover"
            />

            <li>
              <p className="text-[14px]">
                curated by Huang Ching-Ing | Pulima Link | September 2021
              </p>
            </li>
            <li>
              <Link
                href="https://www.pulima.com.tw/PulimaENG/exhibition_202101.aspx"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                more
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            Remapping
          </h2>
          <p className="mt-4 text-[16px] text-justify leading-6">
            After the 1990s, contemporary artists who have Indigenous
            backgrounds in Taiwan developed their own practice methods. They
            tried to be rooted again in their own Indigenous community or in a
            certain territory, by actively linking the material conditions,
            historical events, and collective memory of the place together.
            Their art practices thus were often initiated by the return of the
            body, by rebuilding the relationship between their body and the
            earth, and by sharing such an affinity between the community
            members, or with others in the extended kinship. Between the
            mountains and the coast, the taluan (studio) scattered like star
            clusters is evidence of this trend. In addition to the prominent
            features mentioned above, some of the Indigenous contemporary
            artists in Taiwan have recently chosen to take their creative path
            with papers, pens, and cameras. As a way to act and participate in
            the network, the artists remap the nodes and paths, suture the
            scattered, fragmented stories together, in an attempt to conjure a
            new resonance field.
          </p>
        </div>
      </div>

      {/* Palm Trees, Helicopters, the Boulder, and the Storyteller, */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start leading-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 flex flex-col items-center lg:items-start my-auto">
          {/* <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            Palm Trees, Helicopters, the Boulder, and the Storyteller,
          </h2> */}
          <ul className="mt-4 space-y-2 ">
            <Image
              src="/pro/PalmTrees.jpg"
              width={380}
              height={120}
              alt="PalmTrees"
              layout="intrinsic" // 使用 intrinsic layout 確保圖片不變形
              objectFit="cover"
            />
            <li>
              <p className="text-[14px]">
                Nusantara Archive Project | No Man’s Land | July 2019
              </p>
            </li>
            <li>
              <Link
                href="https://www.heath.tw/nml-article/palm-trees-helicopters-the-boulder-and-the-storyteller/"
                className="text-green-600 text-center lg:text-left font-bold"
              >
                more
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold xl:text-2xl text-center lg:text-left leading-8">
            Palm Trees, Helicopters, the Boulder, and the Storyteller,
          </h2>
          <p className="mt-4 text-[16px] text-justify leading-6">
            《KANTA
            Portraits馬來西亞—台灣交流計劃》是打開-當代藝術工作站與馬來西亞COAC（半島原住民關懷中心）合作的跨國交流項目，作者以自身原住民處境為鏡，映射彼此被納入異族殖民與拓墾的歷程與交會。這次造訪馬來半島上霹靂州庫內村（Kampung
            Cunex）的Temiar部落、雪蘭莪州Lanjan山旁特姆村的Temuan族人、彭亨州雲彬Jemeri村的耶坤族，及加厘島（Carey）布本村的瑪美里族（Mah
            Meri
            tribe），探究在不同國家經歷各自殖民棲地開發後，原屬於南島語言系統的不同語族—甚或「原住民族」身份—被置入不同統治位階的原民族群之間，如何透過部落耆老與青年的訪談描繪出一個在流浪遷徙與渡河歸鄉之間的可塑性空間，進而質問：它可不可以成為一個跨越國家的、相互「再生／產」的起點？
          </p>
        </div>
      </div>
    </section>
  );
};

export default Text;
