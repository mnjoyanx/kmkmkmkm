import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { getBase64 } from "../../Utils";
import Request from "../../Requests";
import { ApiHost } from "../../../globalConfigs";

export default function FileChooser({ count = 1, value = [], onChange = () => {} }) {
    const [preview, setPreview] = useState({
        visible: false,
        image: "",
        title: "",
    });

    const showPreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreview({
            visible: true,
            image: file.url || file.preview,
            title: file.name || file.url.split("/").pop(),
        });
    };

    const hidePreview = () => {
        setPreview({ visible: false, image: "", title: "" });
    };

    const onDelete = (path) => {
        Request.deleteImg("file", { path })
            .then((res) => {
                console.log(res, "del");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = (info) => {
        const fileList = info.fileList;

        if (info.file.status === "removed") {
            //   const path = info?.file?.response?.path;
            const path = info.file?.url;
            onDelete(path);
        }

        onChange(fileList);
    };

    let fileList = Array.isArray(value) ? value : value ? [{ url: ApiHost + "/" + value }] : [];

    return (
        <>
            <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={showPreview}
                onChange={handleChange}
                accept={["image/png"]}
                action={ApiHost + "/file"}
                headers={{
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }}
            >
                {fileList.length < count && (
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                )}
            </Upload>

            <Modal
                visible={preview.visible}
                title={preview.title}
                footer={null}
                onCancel={hidePreview}
            >
                <img style={{ width: "100%" }} src={preview.image} />
            </Modal>
        </>
    );
}
