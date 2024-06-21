export const up = async function (db: any): Promise<any> {
  await db.runSql(`
  INSERT INTO datasets(name, release_dir, multilingual, bundle_date, release_date, total_clips_duration,	valid_clips_duration,	release_type, download_path)
  VALUES
    ('Common Voice Delta Segment 12.0', 'cv-corpus-12.0-delta-2022-12-07', TRUE, '2022-12-07', '2022-12-22', 6865295058, 2634014000, 'delta','cv-corpus-12.0-delta-2022-12-07/cv-corpus-12.0-delta-2022-12-07-{locale}.tar.gz')
  ON DUPLICATE KEY UPDATE name=name
  `);
};

export const down = function (): Promise<any> {
  return null;
};
