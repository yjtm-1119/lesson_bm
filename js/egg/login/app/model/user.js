module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    const User = app.model.define('users', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {type: STRING(255), allowNull: false},
        email: {type: STRING(255), allowNull: false},
        password: {type: STRING(255), allowNull: false},
        username: {type: STRING(255), allowNull: false},
        avatar_url: {
            type: STRING(255), adefaultValue:
                'https://user-gold-cdn.xitu.io/2019/3/7/16956cee70a4bd79?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
        },
        mobile: STRING(11),
        sex: { type: INTEGER, defaultValue: 0 },
        create_at: { type: DATE, defaultValue: NOW },
        updated_at: { type: DATE, defaultValue: NOW },
    }, {
        freezeTableName: true
    });
    return User;
}