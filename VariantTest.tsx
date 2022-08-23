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

import Ig21Image from './assets/images/IG2_1.png';
import { styled } from '@mui/material/styles';
import { VariantTestProps } from './types';
import useVariantTest from './useVariantTest';
 
const Property1Default: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `210px`,  
  height: `226px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `27px 19px`,  
  boxSizing: `border-box`,  
  cursor: `pointer`,  
});
  
const Ig21: any = styled("img")({  
  height: `172px`,  
  width: `172px`,  
  position: `absolute`,  
  left: `38px`,  
  top: `0px`,  
  cursor: `pointer`,  
});
 
function VariantTest(props: VariantTestProps): JSX.Element {
  const {fns} = useVariantTest();
  return (
    <Property1Default onClick={fns.clickingClicking(any)} >
       <Ig21 onClick={fns.somethingHere(param1, parm2)}  src={Ig21Image} alt={"IG2 1"}/>
     </Property1Default>
   );
}

export default VariantTest;
