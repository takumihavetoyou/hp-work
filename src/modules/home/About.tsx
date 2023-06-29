import { Box, SxProps, Theme } from "@mui/material";
import aboutimg from "../../resources/home/about_illustration.png"
export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Box className="text"><span className="span1">A</span>BOUT</Box>
      <Box className="text2">私たちについて</Box>
      <img className="img1" src={aboutimg}/>
      <Box className="text3">副業人材を主体とした<span className="span1">「業務委託サービス」</span>です。<br></br> 
        通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担う<br></br>
        フリーランスエンジニアが<span className="span1">現在約100名</span>ほど所属しています。<br></br>
      </Box>
      <Box className="text3">
        副業を主体としているため長時間の拘束稼働はできませんが、<br></br>
        トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。<br></br>
        クライアント側のチームメンバーと共同して開発を行うこともできるため、<br></br>
        <span className="span1">クライアント所属のエンジニアのスキルアップ</span>を行うことも可能です。<br></br>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    height: 752,
    backgroundColor: "#22A1B91A",
    textAlign: "center",
  },
  ".text" : {
    fontSize: "64px",
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    letterSpacing: "0.18em",
    lineHeight: "87px",
  },
  ".text2" : {
    fontSize: "16px",
    lineHeight: "22px",
  },
  ".span1" : {
    color: "#22A1B9",
  },
  ".img1" : {
    width: "1101px",
    height: "309px",
  },
  ".text3" : {
    textAlign:"center",
    fontfamily: 'Noto Sans',
    fontsize:"18px",
    height:"130px",
  },
}