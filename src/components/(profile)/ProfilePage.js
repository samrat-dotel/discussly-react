import React from "react";
import ProfileHeader from "./ProfileHeader";
import StatsSection from "./StatsSection";
import ActivityFeed from "./ActivityFeed";
import Navbar from "../(layout)/Navbar";
import Sidebar from "../(general)/Sidebar";

const ProfilePage = () => {
  const profileData = {
    name: "John Doe",
    title: "Teacher",
    email: "john.doe@cihe.edu.au",
    status: "Gold",
    reputationPoints: 100,
    answersGiven: 100,
    questionsAsked: 100,
    profileImage:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  const activityData = [
    {
      id: 1,
      date: "24 June 2024",
      title:
        "How to add LDAP support on the newest Windows PHP 8.2 download with OpenSSL3?",
      tags: ["php", "ldap", "php-8.2"],
      views: 420,
      answers: 6,
      type: "question",
    },
    {
      id: 2,
      date: "24 June 2024",
      title:
        "How to add LDAP support on the newest Windows PHP 8.2 download with OpenSSL3?",
      tags: ["php", "ldap", "php-8.2"],
      views: 420,
      answers: 6,
      type: "answer",
    },
    {
      id: 3,
      date: "24 June 2024",
      title:
        "How to add LDAP support on the newest Windows PHP 8.2 download with OpenSSL3?",
      tags: ["php", "ldap", "php-8.2"],
      views: 420,
      answers: 6,
      type: "question",
    },
  ];

  return (
    <main>
      <Navbar />

      <div className="flex">
        <div className="flex w-full justify-center">
          <Sidebar />

          <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <ProfileHeader
                  name={profileData.name}
                  title={profileData.title}
                  email={profileData.email}
                  profileImage={profileData.profileImage}
                />

                <StatsSection
                  status={profileData.status}
                  reputationPoints={profileData.reputationPoints}
                  answersGiven={profileData.answersGiven}
                  questionsAsked={profileData.questionsAsked}
                />
              </div>

              <div className="md:col-span-2 space-y-8">
                <ActivityFeed activities={activityData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
