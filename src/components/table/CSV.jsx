import { Button } from "antd";

import { CSVLink } from "react-csv";

import { DownloadOutlined } from "@ant-design/icons";

export default function TableCSV({ data }) {
    return (
        <CSVLink data={data}>
            <Button
                style={{ background: "#5b8c00", borderColor: "#5b8c00", color: "white" }}
                icon={<DownloadOutlined />}
            >
                Export CSV
            </Button>
        </CSVLink>
    );
}
