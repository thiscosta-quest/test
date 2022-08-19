/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import CloudImage from './assets/images/cloud.png';
import { styled } from '@mui/material/styles';

 
const TypeQuest = styled("div")({  
  backgroundColor: `rgba(211, 234, 255, 1)`,  
  boxShadow: `0px 3px 7px rgba(11, 87, 163, 0.18)`,  
  borderRadius: `12px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  height: `756px`,  
  width: `273px`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `20px 40px`,  
  boxSizing: `border-box`,  
});
  
const LeftSide = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Location = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Loc = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `700`,  
  fontSize: `22px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Yours = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(57, 96, 234, 1)`,  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 1"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `2px 0px 0px 0px`,  
}));
  
const Temp = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Temp1 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `700`,  
  fontSize: `90px`,  
  letterSpacing: `-4.5px`,  
  textDecoration: `none`,  
  lineHeight: `90px`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const TempType = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(25, 55, 210, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `400`,  
  fontSize: `90px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `90px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 10px`,  
});
  
const IconPlaceholder = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `20px 30px`,  
  boxSizing: `border-box`,  
  margin: `-42px 0px 0px 0px`,  
});
  
const Cloud = styled("img")({  
  height: `119px`,  
  width: `106.94px`,  
  margin: `0px`,  
});
 
function VerticalNegativeSpaceOk() {
  return (
    <TypeQuest >
       <LeftSide >
         <Location >
           <Loc >
             {`San Diego, CA`}
               </Loc>
           <Yours >
             {`Your Location`}
               </Yours>
         </Location>
         <Temp >
           <Temp1 >
             {`17°`}
               </Temp1>
           <TempType >
             {`F`}
               </TempType>
         </Temp>
       </LeftSide>
       <IconPlaceholder >
         <Cloud  src={CloudImage} alt={"cloud"}/>
       </IconPlaceholder>
     </TypeQuest>
   );
}

export default VerticalNegativeSpaceOk;
