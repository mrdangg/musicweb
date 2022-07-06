// auto update time
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let year = d.getFullYear();
let day = d.getDate();
let namemonth = month[d.getMonth()];


// list music
export const content = [
    {
        img : './assets/img/xepisode_1.jpg',
        title : 'Yêu Khác Thương Hại',
        time : `${day} ${namemonth} ${year}`,
    },
    {
        img : './assets/img/xepisode_2.jpg',
        title : 'Rentz - Alone',
        time : `${day} ${namemonth} ${year}`,
    },
    {
        img : './assets/img/xepisode_3.jpg',
        title : 'Cartoon - On & On',
        time : `${day} ${namemonth} ${year}`,
    },
    {
        img : './assets/img/xepisode_4.jpg',
        title : 'VIỆT NAM TÔI',
        time : `${day} ${namemonth} ${year}`,
    },
    {
        img : './assets/img/xepisode_5.jpg',
        title : 'Độ tộc 2',
        time : `${day} ${namemonth} ${year}`,
    },
    
]

export const guets_member = [
    {   
        img_member : './assets/img/guest_1.jpg',
        name : 'Michael Smith',
        job : 'Michael Smith'
    },
    {   
        img_member : './assets/img/guest_2.jpg',
        name : 'Samantha Doe',
        job : 'Developer'
    },
    {   
        img_member : './assets/img/guest_3.jpg',
        name : 'James Williams',
        job : 'Developer'
    }
]

export const blog = [
    {   
        img : './assets/img/xblog_1.jpg',
        title : 'How to start your podcast',
        author : 'Michael Smith',
        paragrap : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum malesuada tellus a pretium. Proin quam nisi, maximus in pulvinar sed, viverra vitae est. Ut nibh nisl, malesuada nec massa nec, molestie varius lorem. Mauris aliquet eros eu luctus pulvinar. Suspendisse dapibus iaculis tellus, dignissim posuere felis elementum a.'
    },
    {   
        img : './assets/img/xblog_2.jpg',
        title : 'How to start your podcast',
        author : 'Michael Smith',
        paragrap : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum malesuada tellus a pretium. Proin quam nisi, maximus in pulvinar sed, viverra vitae est. Ut nibh nisl, malesuada nec massa nec, molestie varius lorem. Mauris aliquet eros eu luctus pulvinar. Suspendisse dapibus iaculis tellus, dignissim posuere felis elementum a.'
    },
    {   
        img : './assets/img/xblog_3.jpg',
        title : 'How to start your podcast',
        author : 'Michael Smith',
        paragrap : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum malesuada tellus a pretium. Proin quam nisi, maximus in pulvinar sed, viverra vitae est. Ut nibh nisl, malesuada nec massa nec, molestie varius lorem. Mauris aliquet eros eu luctus pulvinar. Suspendisse dapibus iaculis tellus, dignissim posuere felis elementum a.'
    }

]

  
export const listsAlbum = [
    {
        img : './assets/img/imglist1.jpg',
        titleTag : 'music',
        textPhoto : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon : 'https://preview.colorlib.com/theme/mypodcast/images/play.svg'
    },
    {
        img : './assets/img/imglist2.jpg',
        titleTag : 'music',
        textPhoto : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon : 'https://preview.colorlib.com/theme/mypodcast/images/play.svg'
    },
    {
        img : './assets/img/imglist3.jpg',
        titleTag : 'music',
        textPhoto : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon : 'https://preview.colorlib.com/theme/mypodcast/images/play.svg'
    }
]


export const category = [
    {   
        id: 1,
        tags : 'travel',
        img : './assets/img/category1.jpg',
        title : 'Cras malesuada ipsum sapien.'
    },
    {   
        id: 2,
        tags : 'travel',
        img : './assets/img/category2.jpg',
        title : 'Cras malesuada ipsum sapien.'
    },
    {   
        id: 3,
        tags : 'travel',
        img : './assets/img/category3.jpg',
        title : 'Cras malesuada ipsum sapien.'
    },
    {   
        id: 4,
        tags : 'travel',
        img : './assets/img/category4.jpg',
        title : 'Cras malesuada ipsum sapien.'
    },
]