import Accordion from "../components/Accordion/Accordion";

function AccordionPage(){
    const items=[
        {
            id:'1234hhuo',
            label:'can i use the react on a project?',
            content:'you can use react on any project you want. you can use react on any project you want.you can use react on any project you want.',
        },
        {
            id:'iijie',
            label:'can i use the css on a project?',
            content:'you can use css on any project you want. you can use css on any project you want.you can use css on any project you want.',
        },
        {
            id:'17uo',
            label:'can i use the java on a project?',
            content:'you can use java on any project you want. you can use java on any project you want.you can use java on any project you want.',
        },
    ];

 

    return<Accordion items={items}/>
}

export default AccordionPage;