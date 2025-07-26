import './style.scss'
import { useState } from 'react'

const Upload = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')
  const [images, setImages] = useState<File[]>([])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const files = Array.from(e.target.files)
    setImages([...images, ...files])
  }

  return (
    <div className="uploadPage">
      <h1>게시물 업로드</h1>

      <div className="formGroup">
        <label>제목</label>
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="formGroup">
        <label>설명</label>
        <input
          type="text"
          placeholder="설명을 입력해주세요."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="formGroup">
        <label>태그</label>
        <input
          type="text"
          placeholder="태그를 입력해주세요."
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>

      <div className="uploadBox">
        <label htmlFor="uploadInput">업로드</label>
        <input
          type="file"
          id="uploadInput"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          hidden
        />
      </div>

      <div className="previewGrid">
        {images.map((file, index) => (
          <div key={index} className="previewItem">
            <img src={URL.createObjectURL(file)} alt={`preview-${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Upload
