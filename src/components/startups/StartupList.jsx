import { useContext, useEffect, useState } from "react";
import { List } from 'antd';
import StartupListItem from "./StartupListItem";
import { SessionContext } from "../../App";
import "./startup-list.css";

export default function StartupList() {
  const { session } = useContext(SessionContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`https://pitch-vote-api.web.app/startups/${session}`)
    // fetch(`http://localhost:5002/startups/${session}`)
      .then((res) => res.json())
      .then((body) => {
        setData(body);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line
  }, [session]);

  return (
    <div id="scrollableDiv">
      <List
        loading={loading}
        dataSource={data}
        renderItem={(item) => (
          <>
            {
              item.startupId
              ? <StartupListItem startup={item} key={item.startupId} />
              : null
            }
          </>
        )}
      />
    </div>
  )
}
