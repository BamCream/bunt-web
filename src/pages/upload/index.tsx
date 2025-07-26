import './style.scss'
import { useState } from 'react'

const Upload = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')
  const [images, setImages] = useState<File[]>([])
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const files = Array.from(e.target.files)

    // 이미지 교체 모드일 때
    if (replaceIndex !== null) {
      const newImages = [...images]
      newImages[replaceIndex] = files[0]
      setImages(newImages)
      setReplaceIndex(null)
    } else {
      setImages([...images, ...files])
    }
  }

  const handleImageDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleImageReplace = (index: number) => {
    setReplaceIndex(index)
    const input = document.getElementById('uploadInput')
    if (input) input.click()
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
          multiple={replaceIndex === null}
          onChange={handleImageUpload}
          hidden
        />
      </div>

      <div className="previewGrid">
        {images.map((file, index) => (
          <div key={index} className="previewItem">
            <img src={URL.createObjectURL(file)} alt={`preview-${index}`} />
            <div className="imageActions">
              <button onClick={() => handleImageDelete(index)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Upload;