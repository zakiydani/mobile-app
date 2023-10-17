import { dataNews } from '../data'

const News = () => {
  return (
    <div className="div-news">
      {dataNews.map((data) => (
        <div className="card-news">
          <div className="header-news">
            <img
              src="/icon/eye-fill.svg"
              alt={data.title}
              width={10}
              height={10}
            />
            <div>
              <p className="title">{data.title}</p>
              <p className="created-date">{data.createdDate}</p>
            </div>
          </div>
          <p className="description">{data.description}</p>
          <div className="divider" />
          <div className="button-action">
            <img
              src="/icon/share-line.svg"
              alt="share"
              width={15}
              height={15}
            />
            <div className="div-button">
              <div className="div-button">
                <img
                  src="/icon/chat-3-fill.svg"
                  alt="comment"
                  width={15}
                  height={15}
                />
                <span className="">{data.comment}</span>
              </div>
              <div className="div-button">
                <img
                  src="/icon/heart-3-line.svg"
                  alt="like"
                  width={15}
                  height={15}
                />
                <span className="">{data.like}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default News
