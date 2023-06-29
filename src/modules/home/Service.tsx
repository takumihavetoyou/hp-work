import { Box, SxProps, Theme } from "@mui/material";
import serviceimg from "../../resources/home/service_guild.png"
import serviceimg2 from "../../resources/home/service_element.png"
import serviceimg3 from "../../resources/home/service_education.png"

export const Service = () => {
  return (
    <Box className="Service" sx={sx}>
      <Box className="text1">SERVICE</Box>
      <Box className="text2">事業内容</Box>
      <Box className="contents">
        <img className="img1" src={serviceimg} />
        <Box className="contents-text">
          <Box className="text3">プログラマーズギルド</Box>
          <Box className="text4">Programmers Guild</Box>
          <Box className="text5">チーム開発の負担サービス</Box>
          <Box className="text6">副業人材を主体とした「業務委託サービス」です。 通常では人材派遣の<br></br>市場に出てこないような大企業に勤めているベテランのエンジニアや開発<br></br>の中核を担うフリーランスエンジニアが現在約100名ほど所属していま<br></br>す。副業を主体としているため長時間の拘束稼働はできませんが、トップ<br></br>レベルの知識と経験を活かして複数人でチームとなってクライアントの業<br></br>務を請け負います。 クライアント側のチームメンバーと共同して開発を行<br></br>うこともできるため、クライアント所属のエンジニアのスキルアップを行<br></br>うことも可能です。
          </Box>
        </Box>
      </Box>
      <Box className="contents2">
        <img className="img2" src={serviceimg2} />
        <Box className="contents-text">
          <Box className="text11">テクノエレメント</Box>
          <Box className="text12">Techno Element</Box>
          <Box className="text13">フレキシブルなSES事業</Box>
          <Box className="text14">お客さまのプロジェクトで人手が足りない場合に、「スポットで力を入れ<br></br>るため1ヶ月フルで稼働できるエンジニアが２、３人欲しい」、「特定の<br></br>スキルを持った人材が1人が欲しい」といった、要望にも対応することが<br></br>できる SES 事業も手がけています。弊社は多くの人材をプールしているた<br></br>め、お客様の事業フェーズにあったご要望にフレキシブルにご提供できま<br></br>す。事業分野も Web やクライアントアプリの開発からインフラまで、業<br></br>界・ジャンルに問わずさまざまな人材をご用意しております。<br></br>
            また、現役の Web/IT エンジニアも多数所属しているため、開発から得た<br></br>知見や技術も提供することができます。結果として保守性が高く、事業の<br></br>規模や今後のスケールに合わせて拡張しやすい、高品質な開発のサポート<br></br>を行うことも可能です。
          </Box>
        </Box>
      </Box>
      <Box className="contents">
        <img className="img3" src={serviceimg3}/>
        <Box className="contents-text">
          <Box className="text21">エンジニア教育</Box>
          <Box className="text22">Top engineer Experience Program</Box>
          <Box className="text23">トップエンジニアとの開発を体験する</Box>
          <Box className="text24">バンタンテックフォードアカデミーという学校と共同でエンジニアリング<br></br>教育を行っています。 一般的なスクールではプログラミングを教えたりす<br></br>るのみで、実際に必要な開発スキルは教えてもらえません。 そのためス<br></br>クール出身の人材は使えないというイメージが付いてしまっています。<br></br> TEP では弊社で受けている案件をテクノスタンダードギルドのトップレベ<br></br>ルのエンジニアと一緒に行うことで実際に必要なことを体験でき、 トッ<br></br>プレベルの開発者のコードを読むことで動くだけのシステムではなく保守<br></br>まで考えられた堅牢なシステム開発を経験できます。 TEP参加希望者に向<br></br>けた事前授業も行っており、スクールでは教えていないエンジニアの必須<br></br>スキルである、コマンド操作、サーバー構築、git、設計の基礎などので<br></br>きて当たり前の基礎技術を5日間で教えることも行っています。</Box>        
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Service": {
    width: "100%",
    height: "2018px",
  },
  ".text1": {
    textAlign: "center",
    fontSize: "65px",
    letterSpacing: "0.15",
    paddingTop: "60px",
  },
  ".text2": {
    textAlign: "center",
    paddingTop: "20px",
  },
  ".text3": {
    paddingLeft: "30px"
  },
  ".text4": {
    fontSize: "48px",
    color: "#22A1B9",
    paddingLeft: "30px",
  },
  ".text5": {
    fontSize: "24px",
    fontFamily: "Noto Sans",
    paddingLeft: "30px",
    paddingTop: "20px",
  },
  ".text6": {
    paddingLeft: "30px",
    lineHeight: "30px",
    paddingTop: "30px",
  },
  ".img1": {
  },
  ".contents": {
    display: "flex",
  },
  ".contents2": {
    display: "flex",
    flexDirection:"row-reverse",
  },
  ".img2":{
    paddingTop:"200px",
  },
  ".text11":{
    paddingTop:"200px",
    paddingRight:"500px",
    fontSize:"16px",
  },
  ".text12":{
    color:"#22A1B9",
    fontSize:"48px",
  },
  ".text13":{
    fontSize:"24px",
  },
  ".text14":{
    fontSize:"16px",
    lineHeight:"30px",
    paddingTop:"30px",
  },
  ".img3":{
    paddingTop:"200px",
  },
  ".text21":{
    paddingTop:"200px",
    paddingLeft: "30px"
  },
  ".text22":{
    fontSize: "48px",
    color: "#22A1B9",
    paddingLeft: "30px",
  },
  ".text23":{
    fontSize: "24px",
    fontFamily: "Noto Sans",
    paddingLeft: "30px",
    paddingTop: "20px",
  },
  ".text24":{
    paddingLeft: "30px",
    lineHeight: "20px",
    paddingTop: "30px",
  }
}