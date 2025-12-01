const images = import.meta.glob('../assets/images/Events/*.png', { eager: true });
export const getImage = (name) => images[`../assets/images/Events/${name}`]?.default;

export const eventList = [
  { id: 1, imgName: "Event.png", title: "Design Thinking Workshop", mail : "@225 West Cafe", d_and_b : "23 March 2024  |  18:30" },
  { id: 2, imgName: "Event2.png", title: "Mindfulness & Meditation for Entrepreneurs", mail : "@225 West Cafe", d_and_b : "30 March 2024  |  18:30" },
  { id: 3, imgName: "Event3.png", title: "Panel Discussion: The Future of Work", mail : "@225 West Cafe", d_and_b : "5 April 2024  |  18:30" },
];