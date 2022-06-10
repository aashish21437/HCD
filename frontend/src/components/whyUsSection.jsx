import { Animator, batch, MoveIn, MoveOut ,Sticky} from "react-scroll-motion";

const MoveUS = batch(MoveIn(1500,0),MoveOut(-1500,0));

export default function WhyUsSection(data){
    return(
        <div id='whyUsSection'>
             <Animator animation={Sticky(data.left)}>
                <Animator animation={MoveUS}>
                    
                    <div className='font-Maven font-semibold text-[#39AEA8] text-[10vw] w-[100vw]'>WHY CHOOSE HCD?</div>
                </Animator>
             </Animator>
        </div>
    );
}