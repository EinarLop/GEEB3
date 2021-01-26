import React, { useState } from "react";
import styles from "./SProjectFeedStyles.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InfoTab from "./InfoTab";

function SProjectFeed() {
  return (
    <div className={styles.Global}>
      <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected}>
        <TabList className={styles.TabsList}>
          <Tab className={styles.TabsUnselected}>Overview</Tab>
          <Tab className={styles.TabsUnselected}>Detail</Tab>
          <Tab className={styles.TabsUnselected}>Tags</Tab>
        </TabList>
        <TabPanel>
          <InfoTab />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default SProjectFeed;
