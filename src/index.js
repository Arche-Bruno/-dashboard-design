import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import SendIcon from "@mui/icons-material/Send";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";

import MapIcon from "@mui/icons-material/Map";
import GroupsIcon from "@mui/icons-material/Groups";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CreateIcon from "@mui/icons-material/Create";
import HeadsetIcon from "@mui/icons-material/Headset";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
export const navData = [
  {
    name: "Overview",
    icon: HomeIcon,
  },
  {
    name: "Course",
    icon: DashboardIcon,
  },

  {
    name: "Resources",
    icon: FolderIcon,
  },
  {
    name: "Message",
    icon: SendIcon,
  },
  {
    name: "Setting",
    icon: RoomPreferencesIcon,
  },
];

export const courses = [
  {
    name: "Locations",

    icon: MapIcon,
    cantLessons: "35",
    porcentage: "75",

    color: "#0069D9",
  },
  {
    name: "People",
    icon: GroupsIcon,
    cantLessons: "30",
    porcentage: "50",

    color: "#FFCC3C",
  },
  {
    name: "Airport",
    cantLessons: "45",
    icon: FlightTakeoffIcon,
    porcentage: "25",

    color: "#FF9D34",
  },
  {
    name: "Places",
    cantLessons: "20",
    icon: ApartmentIcon,
    porcentage: "75",

    color: "#87B838",
  },
];

export const Planning = [
  {
    name: "Reading-Topic1",
    subName: "8:59 - 10:18",
    icon1: AutoStoriesIcon,
    icon2: MoreVertIcon,
    color: "#0069D9",
  },
  {
    name: "Writing-Topic2",
    subName: "5:15 - 7:23",
    icon1: CreateIcon,
    icon2: MoreVertIcon,
    color: "#FFCC3C",
  },
  {
    name: "Listening-Topic1",
    subName: "8:12 - 10:16",
    icon1: HeadsetIcon,
    icon2: MoreVertIcon,
    
    color: "#FF9D34",
  },
  {
    name: "Listening-Topic2",
    subName: "8:40 - 10:30",
    icon1: SpatialAudioIcon,
    icon2: MoreVertIcon,
    color: "#87B838",
  },
];


export const statistics =[
  {
    name:"courses Completed",
    number:"09",
  },
  {
    name:"Total Paints",
    number:"280",
  },

  {
    name:"Courses in Progress",
    number:"08",
  },

  {
    name:"Tasks Finished",
    number:"240",
  },


]