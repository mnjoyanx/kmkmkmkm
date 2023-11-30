import { Button, Popconfirm } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

export default function TableDelete({ onDelete, disabled = true }) {
    return (
        <Popconfirm
            disabled={disabled}
            title="Sure to delete all selecteds ?"
            placement="topRight"
            onConfirm={() => onDelete()}
        >
            <Button disabled={disabled} type="danger" icon={<DeleteOutlined />}>
                Delete
            </Button>
        </Popconfirm>
    );
}
