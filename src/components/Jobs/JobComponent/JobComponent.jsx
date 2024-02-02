import React from 'react'

const JobComponent = ({jobDetail}) => {
      const rank = jobDetail.rank;
      const newsUrl = jobDetail.newsUrl;
      const newsHeading = jobDetail.newsHeading;
      const srcUrl = jobDetail.srcUrl;
      const srcName = jobDetail.srcName;
      const subScore = jobDetail.subScore;
      const posterName = jobDetail.posterName;
      const timePosted = jobDetail.timePosted;
      const commetsCount =  jobDetail.commetsCount;
  return (
    <>
        <tr>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <span>{rank}.</span>
                            </td>
                            <td className='voteLinks'>
                                <a href='/' alt='upvote'>
                                    <img src='https://news.ycombinator.com/triangle.svg' alt='upvote' className='voteArrow'></img>
                                </a>
                            </td>
                            <td className='newsHeading'>
                                <span className='newsTitle'>
                                    <a href={newsUrl}> {newsHeading}
                                    </a>
                                    <span>&nbsp;</span>
                                    <span>
                                        (
                                            <a href={srcUrl}>
                                                <span>{srcName}</span>
                                            </a>
                                        )
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}></td>
                            <td className='subText'>
                                <span className='subline'>
                                    <span className='subScore'>
                                        {subScore} points
                                    </span>
                                    <span>&nbsp;</span>
                                    by
                                    <span>&nbsp;</span>
                                    <a href='/'>
                                        {posterName}
                                    </a>
                                    <span>&nbsp;</span>
                                    <span>
                                        <a href='/'> {timePosted} hours ago </a>
                                    </span>
                                    <span>&nbsp;|</span>
                                    <span>&nbsp;</span>
                                    <span>
                                        <a href='/'> unvote </a>
                                    </span>
                                    <span>&nbsp;|</span>
                                    <span>&nbsp;</span>
                                    <span>
                                        <a href='/'> hide</a>
                                    </span>
                                    <span>&nbsp;|</span>
                                    <span>&nbsp;</span>
                                    <span>
                                        {commetsCount} comments
                                    </span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </>
  )
}

export default JobComponent