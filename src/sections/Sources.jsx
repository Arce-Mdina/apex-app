import React from 'react'

const Sources = () => {

    const links = {
        link1: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74114a08-2daa-4205-a515-b2eb710a17b3/dfbk1zv-3280afd9-db3f-42d5-96c8-cd6904585b3c.jpg/v1/fill/w_1095,h_730,q_70,strp/filfla_and_filfoletta_islands_by_quit007_dfbk1zv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvNzQxMTRhMDgtMmRhYS00MjA1LWE1MTUtYjJlYjcxMGExN2IzXC9kZmJrMXp2LTMyODBhZmQ5LWRiM2YtNDJkNS05NmM4LWNkNjkwNDU4NWIzYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5_8LdjTjkOMmwpZ2gwQixiP4uO-FBPJLsBVZqX8KujM",
        link2: "https://www.maltadvice.com/wp-content/medias/353/fifla-filfoletta-rock.webp",
        link3: "https://cdn2.picryl.com/photo/2016/03/24/a-british-royal-marines-fires-at-his-target-at-the-ce6b9b-1024.jpg",
        link4: "https://www.shutterstock.com/image-photo/filfla-island-seen-area-blue-260nw-654454537.jpg",
    }

  return (
    <div>
        <div style={{ width: "60vw", textAlign: "left", overflow: "hidden" }}>
            Images used in the "/filfoletta" page (in order):
            <ul className="source-list">
                <li><a href={links.link1} target="_blank">{links.link1}</a></li>
                <li><a href={links.link2} target="_blank">{links.link2}</a></li>
                <li><a href={links.link3} target="_blank">{links.link3}</a></li>
                <li><a href={links.link4} target="_blank">{links.link4}</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sources